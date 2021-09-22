<template>
  <div>
    <log-timeline></log-timeline>
  </div>
</template>

<script>
import LogTimeline from '@/components/LogTimeline'

  export default {
    name: '',
    components: {
      LogTimeline
    },
    data() {
      return {
        title: '更新日志',
        showWeather: true,
        dataList: [
          {
            version: '2.0.0',
            date: '2021/09/10',
            weather: '晴天☀️',
            body: [
              {
                title: '第一版正式发布',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              },
              {
                title: '添加了时间轴',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              }
            ]
          },
          {
            version: '1.2.0',
            date: '2021/09/12',
            weather: '阴天☁️',
            body: [
              {
                title: '第一版正式发布',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              },
              {
                title: '添加了时间轴',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              }
            ]
          },
          {
            version: '1.1.1',
            date: '2021/09/13',
            weather: '雨天☔️',
            body: [
              {
                title: '第一版正式发布',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              },
              {
                title: '添加了时间轴',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              }
            ]
          },
          {
            version: '1.1.0',
            date: '2021/09/15',
            weather: '下雪❄️',
            body: [
              {
                title: '第一版正式发布',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              },
              {
                title: '添加了时间轴',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              }
            ]
          },
          {
            version: '1.0.0',
            date: '2021/09/20',
            weather: '晴天☀️',
            body: [
              {
                title: '第一版正式发布',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
                  }
                ]
              },
              {
                title: '添加了时间轴',
                children: [
                  {
                    content: 'add timeline'
                  },
                  {
                    content: 'add colorful'
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