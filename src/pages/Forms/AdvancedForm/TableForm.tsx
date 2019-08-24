import React, { FormEvent, Fragment, PureComponent } from 'react'
import { Button, Divider, Input, message, Popconfirm, Table } from 'antd'
import styles from '../index.less'

interface TableFormProps {
  value?: any,
  onChange: (data: any) => void
}

interface TableFormState {
  loading: boolean,
  data: any
}

class TableForm extends PureComponent <TableFormProps, TableFormState> {
  index: number
  cacheOriginData: any
  clickedCancel: boolean | undefined

  constructor (props: Readonly<TableFormProps>) {
    super(props)
    this.state = {
      data: props.value,
      loading: false
    }
    this.index = 0
    this.cacheOriginData = {}
  }

  componentWillReceiveProps (nextProps: any) {
    if ('value' in nextProps) {
      this.setState({
        data: nextProps.value
      })
    }
  }

  getRowByKey = (key: string, newData?: any) => {
    return (newData || this.state.data).filter((item: any) => item.key === key)[0]
  }

  toggleEditable = (e: FormEvent, key: string) => {
    e.preventDefault()
    const newData = this.state.data.map((item: any) => ({ ...item }))
    let target = this.getRowByKey(key, newData)
    if (target) {
      // 进入编辑状态保存原始数据
      if (!target.editable) {
        this.cacheOriginData[key] = { ...target }
      }
      target.editable = !target.editable
      this.setState({ data: newData })
    }
  }

  remove (key: string) {
    const newData = this.state.data.filter((item: any) => item.key !== key)
    this.setState({ data: newData })
    this.props.onChange(newData)
  }

  newMember = () => {
    const newData = this.state.data.map((item: any) => ({ ...item }))
    newData.push({
      key: `NEW_THMP_ID${this.index}`,
      workId: '',
      name: '',
      department: '',
      editable: true,
      isNew: true
    })
    this.index += 1
    this.setState({ data: newData })
  }

  handleKeyPress = (e: any, key: string) => {
    if (e.key === 'Enter') {
      this.saveRow(e, key)
    }
  }

  handleFieldChange = (e: any, fieldName: string, key: string) => {
    const newData = this.state.data.map((item: any) => ({ ...item }))
    const target = this.getRowByKey(key, newData)
    if (target) {
      target[fieldName] = e.target.value
      this.setState({ data: newData })
    }
  }

  saveRow = (e: any, key: string) => {
    e.persist()
    this.setState({
      loading: true
    })
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false
        return
      }
      const target = this.getRowByKey(key) || {}
      if (!target.workId || !target.name || !target.department) {
        message.error('请填写完整成员信息。')
        e.target.focus()
        this.setState({
          loading: false
        })
        return
      }
      delete target.isNew
      this.toggleEditable(e, key)
      this.props.onChange(this.state.data)
      this.setState({
        loading: false
      })
    }, 500)
  }

  cancel (e: any, key: string) {
    this.clickedCancel = true
    e.preventDefault()
    const newData = this.state.data.map((item: any) => ({ ...item }))
    const target = this.getRowByKey(key, newData)
    if (this.cacheOriginData[key]) {
      Object.assign(target, this.cacheOriginData[key])
      target.editable = false
      delete this.cacheOriginData[key]
    }
    this.setState({ data: newData })
    this.clickedCancel = false
  }

  render () {
    const columns = [
      {
        title: '成员姓名',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
        render: (text: string | number | string[] | undefined, record: { editable: any; key: string; }) => {
          if (record.editable) {
            return (
              <Input
                autoComplete='off'
                value={text}
                autoFocus
                onChange={e => this.handleFieldChange(e, 'name', record.key)}
                onKeyPress={e => this.handleKeyPress(e, record.key)}
                placeholder='成员姓名'
              />
            )
          }
          return text
        }
      },
      {
        title: '工号',
        dataIndex: 'workId',
        key: 'workId',
        width: '20%',
        render: (text: string | number | string[] | undefined, record: { editable: any; key: string; }) => {
          if (record.editable) {
            return (
              <Input
                autoComplete='off'
                value={text}
                onChange={e => this.handleFieldChange(e, 'workId', record.key)}
                onKeyPress={e => this.handleKeyPress(e, record.key)}
                placeholder='工号'
              />
            )
          }
          return text
        }
      },
      {
        title: '所属部门',
        dataIndex: 'department',
        key: 'department',
        width: '40%',
        render: (text: string | number | string[] | undefined, record: { editable: any; key: string; }) => {
          if (record.editable) {
            return (
              <Input
                autoComplete='off'
                value={text}
                onChange={e => this.handleFieldChange(e, 'department',
                  record.key)}
                onKeyPress={e => this.handleKeyPress(e, record.key)}
                placeholder='所属部门'
              />
            )
          }
          return text
        }
      },
      {
        title: '操作',
        key: 'action',
        render: (text: any, record: { editable: any; isNew: any; key: string; }) => {
          if (!!record.editable && this.state.loading) {
            return null
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <span className='link-button' onClick={e => this.saveRow(e, record.key)}>添加</span>
                  <Divider type='vertical'/>
                  <Popconfirm
                    title='是否要删除此行？'
                    onConfirm={() => this.remove(record.key)}>
                    <span className='link-button'>删除</span>
                  </Popconfirm>
                </span>
              )
            }
            return (
              <span>
                <span className='link-button' onClick={e => this.saveRow(e, record.key)}>保存</span>
                <Divider type='vertical'/>
                <span className='link-button' onClick={e => this.cancel(e, record.key)}>取消</span>
              </span>
            )
          }
          return (
            <span>
              <span
                className='link-button'
                onClick={(e: FormEvent) => this.toggleEditable(e, record.key)}>编辑</span>
              <Divider type='vertical'/>
              <Popconfirm
                title='是否要删除此行？'
                onConfirm={() => this.remove(record.key)}>
                <span className='link-button'>删除</span>
              </Popconfirm>
            </span>
          )
        }
      }
    ]
    return (
      <Fragment>
        <Table
          loading={this.state.loading}
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          rowClassName={record => {
            return record.editable ? styles.editable : ''
          }}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type='dashed'
          onClick={this.newMember}
          icon='plus'
        >新增成员
        </Button>
      </Fragment>
    )
  }
}

export default TableForm
