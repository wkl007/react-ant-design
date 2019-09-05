import React, { Component, Fragment } from 'react'
import { Alert, Table } from 'antd'
import styles from './index.less'

function initTotalList (columns: any): any {
  const totalList: any = []
  columns.forEach((column: any) => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 })
    }
  })
  return totalList
}

interface StandardTableProps {
  data: any;
  pagination: any;
  loading: boolean;
  columns: any;
  rowKey?: string;
  selectedRows: any;
  onSelectRow: (selectedRows: any) => void;
  onChange: (pagination: any, filters: any, sorter: any) => void;
}

interface StandardTableState {
  selectedRowKeys: any;
  needTotalList: any;
}

class StandardTable extends Component<StandardTableProps, StandardTableState> {
  constructor (props: Readonly<StandardTableProps>) {
    super(props)
    const { columns } = props
    const needTotalList = initTotalList(columns)
    this.state = {
      selectedRowKeys: [],
      needTotalList
    }
  }

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns)
      this.setState({
        selectedRowKeys: [],
        needTotalList
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    let needTotalList = [...this.state.needTotalList]
    needTotalList = needTotalList.map(item => {
      return {
        ...item,
        total: selectedRows.reduce((sum: any, val: any) => {
          return sum + parseFloat(val[item.dataIndex])
        }, 0)
      }
    })
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys, needTotalList })
  }

  handleTableChange = (pagination: any, filters: any, sorter: any) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }

  render () {
    const { selectedRowKeys, needTotalList } = this.state
    const { data: { list }, pagination, loading, columns, rowKey } = this.props
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination
    }
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: (record: any) => ({
        disabled: record.disabled
      })
    }
    return <div className={styles.standardTable}>
      <div className={styles.tableAlert}>
        <Alert
          message={
            <Fragment>
              已选择
              <span
                className='link-button'
                style={{ fontWeight: 600 }}>{selectedRowKeys.length}</span> 项&nbsp;&nbsp;
              {
                needTotalList.map((item: any) => (
                  <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                    {item.title}总计&nbsp;
                    <span style={{ fontWeight: 600 }}>
                      {item.render ? item.render(item.total) : item.total}
                    </span>
                  </span>
                ))
              }
              <span
                className='link-button'
                onClick={this.cleanSelectedKeys}
                style={{ marginLeft: 24 }}>
                  清空
              </span>
            </Fragment>
          }
          type='info'
          showIcon
        />
      </div>
      <Table
        loading={loading}
        rowKey={rowKey || 'key'}
        rowSelection={rowSelection}
        dataSource={list}
        columns={columns}
        pagination={paginationProps}
        onChange={this.handleTableChange}
      />
    </div>
  }
}

export default StandardTable
