<template>
  <div>
    <Timeline 
      :title="title" 
      :data-list="dataList"
      :show-weather="showWeather">
    </Timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
  export default {
    name: 'timeline',
    components: {
      Timeline
    },
    data() {
      return {
        title: '时间轴',
        showWeather: true,
        dataList: [
          {
            year: '2021',
            date: '2021/09/10',
            weather: '晴天☀️',
            body: [
              {
                month: '9月',
                children: [
                  {
                    title: 'oauth'
                  },
                  {
                    title: '设计原则'
                  }
                ]
              },
              {
                month: '8月',
                children: [
                  {
                    title: 'guacamole'
                  },
                  {
                    title: 'java netty websocket'
                  },
                  {
                    title: 'python websocket'
                  },
                  {
                    title: 'git lfs文件'
                  }
                ]
              },
              {
                month: '7月',
                children: [
                  {
                    title: 'java springboot spring.factories作用'
                  },
                  {
                    title: '数据库建模 : 概念模型 , 逻辑模型和物理模型'
                  },
                  {
                    title: '数据中应不应使用外键'
                  },
                  {
                    title: '学习杂谈'
                  }
                ]
              },
              {
                month: '5月',
                children: [
                  {
                    title: 'Django时区设置问题'
                  }
                ]
              },
              {
                month: '2月',
                children: [
                  {
                    title: 'Typescript Install'
                  },
                  {
                    title: 'Django_Celery'
                  }
                ]
              },
              {
                month: '1月',
                children: [
                  {
                    title: 'Anaconda In Docker with CodeServer'
                  }
                ]
              },
            ]
          },
          {
            year: '2020',
            date: '2021/09/12',
            weather: '阴天☁️',
            body: [
              {
                month: '10月',
                children: [
                  {
                    title: 'What is k8s'
                  }
                ]
              },
              {
                month: '9月',
                children: [
                  {
                    title: 'jmockit'
                  }
                ]
              },
              {
                month: '8月',
                children: [
                  {
                    title: 'java并发编程'
                  },
                  {
                    title: 'add colorful'
                  }
                ]
              },
              {
                month: '7月',
                children: [
                  {
                    title: 'Elastic Mapping Field DataType'
                  },
                  {
                    title: '阿里巴巴高级算法专家威视：组建技术团队的一些思考'
                  },
                  {
                    title: 'ElasticSearch Mapping'
                  }
                ]
              }
            ]
          },
          {
            year: '2019',
            date: '2021/09/13',
            weather: '雨天☔️',
            body: [
              {
                month: '12月',
                children: [
                  {
                    title: 'ChatBot对话管理'
                  }
                ]
              },
              {
                month: '9月',
                children: [
                  {
                    title: 'ubuntu20 network config'
                  },
                  {
                    title: 'file share'
                  }
                ]
              }
            ]
          },
          {
            year: '2018',
            date: '2021/09/15',
            weather: '下雪❄️',
            body: [
              {
                month: '11月',
                children: [
                  {
                    title: 'mysql关键字'
                  }
                ]
              },
              {
                month: '9月',
                children: [
                  {
                    title: 'docker安装'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>