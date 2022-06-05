// Components plugin

import List from '@/components/ui/data/List.vue'

import Form from '@/components/ui/forms/Form.vue'
import FormItem from '@/components/ui/forms/FormItem.vue'
import Input from '@/components/ui/forms/Input.vue'

import Button from '@/components/ui/navigation/Button.vue'

export default {
	install (app) {
		app.component('CList', List)
		app.component('CForm', Form)
		app.component('CFormItem', FormItem)
		app.component('CInput', Input)
		app.component('CButton', Button)
	},
}