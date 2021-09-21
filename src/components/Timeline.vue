<template>
  <div class="timeline-wrap">
    <div class="timeline-header">
      <span>更新日志</span>
    </div>
    <div class="timeline-item" v-for="(item,index) in dataList" :key="index">
      <div class="item-version">
        <span>{{ item.version }}</span>
      </div>
      <div class="timeline-item-time">
        <code>{{ item.date }}</code>
        <span class="item-weather">{{ item.weather }}</span>
      </div>
      <div class="timeline-item-content">
        <div v-for="(subItem,subIndex) in item.body" :key="subIndex">
          <span class="subItem-title">{{ subItem.title }}</span>
          <div class="subItem-children">
            <span v-for="(threeItem,threeIndex) in subItem.children" :key="threeIndex">{{ threeItem.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timeline',
    data(){
      return {
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
@import "@/styles/timeline.scss";
</style>