import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from '@/components/button-demo/button-demo'
import LoadingDemo from '@/components/loading-demo/loading-demo'
import TipDemo from '@/components/tip-demo/tip-demo'
import ToolbarDemo from '@/components/toolbar-demo/toolbar-demo'
import TabBarDemo from '@/components/tabbar-demo/tabbar-demo'
import CheckboxDemo from '@/components/checkbox-demo/checkbox-demo'
import CheckboxGroupDemo from '@/components/checkbox-group-demo/checkbox-group-demo'
import RadioDemo from '@/components/radio-demo/radio-demo'
import CheckerDemo from '@/components/checker-demo/checker-demo'
import InputDemo from '@/components/input-demo/input-demo'
import TextareaDemo from '@/components/textarea-demo/textarea-demo'
import SelectDemo from '@/components/select-demo/select-demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Button',
      name: 'ButtonDemo',
      component: ButtonDemo
    }, {
      path: '/Loading',
      name: 'LoadingDemo',
      component: LoadingDemo
    },
    {
      path: '/Tip',
      name: 'TipDemo',
      component: TipDemo
    }, {
      path: '/Toolbar',
      name: 'Toolbar',
      component: ToolbarDemo
    },
    {
      path: '/TabBar',
      name: 'TabBar',
      component: TabBarDemo
    },
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: CheckboxDemo
    },
    {
      path: '/CheckboxGroup',
      name: 'CheckboxGroup',
      component: CheckboxGroupDemo
    }, {
      path: '/Radio',
      name: 'Radio',
      component: RadioDemo
    }, {
      path: '/Checker',
      name: 'Checker',
      component: CheckerDemo
    }, {
      path: '/Input',
      name: 'Input',
      component: InputDemo
    }, {
      path: '/Textarea',
      name: 'Textarea',
      component: TextareaDemo
    }, {
      path: '/Select',
      name: 'Select',
      component: SelectDemo
    }
  ]
})
