import React from 'react'
import './style.css'
import { Table, Divider, Tag } from "antd"

const CardTableView = () =>{

        const columns = [
          {
            title: 'Type',
            key: 'type',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => {
                  let color = tag;
                  if (tag === 'FS') {
                    color = 'blue';
                  }else{
                    color="gold"
                  }

                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>
            ),
          },  
          {
              title: 'Feature set name',
              dataIndex: 'FeatureSetName',
              key: 'FeatureSetName',
              render: text => <a>{text}</a>,
            },
            
            {
              title: 'Created date',
              dataIndex: 'CreatedDate',
              key: 'CreatedDate',
            },
            {
              title: 'WLS',
              dataIndex: 'wls',
              key: 'wls',
            },
            {
              title: 'RF',
              dataIndex: 'rf',
              key: 'rf',
            },
            {
              title: 'DQ',
              dataIndex: 'dq',
              key: 'dq',
            },
            
            
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>Organize to bookmarks</a>
                  <Divider type="vertical" />
                  <a>Star</a>
                </span>
              ),
            },
          ];
          
          const data = [
            {
             
              tags: ['FS'],
              FeatureSetName: 'Equity Returns from China market',
              CreatedDate: '02/04/2020',
              wls: 23,
              rf: 234,
              dq: 'pass',
              description: 'Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.',
            },
            {
             
              tags: ['DS'],
              FeatureSetName: 'Factot loadings ZH 1 day 2583543',
              CreatedDate: '02/04/2020',
              wls: 23,
              rf: 234,
              dq: 'n/a',
              description: 'Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.',
            },
            {
             
              tags: ['FS'],
              FeatureSetName: 'Best Operating Lease Commitment, after 5 yrs',
              CreatedDate: '02/04/2020',
              wls: 23,
              rf: 234,
              dq: 'pass',
              description: 'Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.',
            },
            {
             
              tags: ['DS'],
              FeatureSetName: '1% Decrease - effect on PBO (OPEB) - Foreign',
              CreatedDate: '02/04/2020',
              wls: 23,
              rf: 234,
              dq: 'pass',
              description: 'Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.',
            },
            {
             
              tags: ['FS'],
              FeatureSetName: 'Accumulated Benefit Obligations (Pension)',
              CreatedDate: '02/04/2020',
              wls: 23,
              rf: 234,
              dq: 'failed',
              description: 'Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.',
            },
           
            
          ];

          return (
              <div className="CardTable">
                <Table columns={columns} dataSource={data} expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}/>

              </div>
          )

        return <pre>{JSON.stringify(columns, null, 5)}</pre>;
}



export default CardTableView

