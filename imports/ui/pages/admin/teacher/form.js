import React from 'react'
import Trumbowyg from '/imports/modules/trumbowyg'
import PropTypes from 'prop-types'


class TeacherForm extends React.Component {
  constructor(props) {
    super(props)
    const { name, brief, photoUrl } = props.teacher
    const _i18n = props.teacher.i18n
    const i18n = {
      name: {
        ru: _i18n.name.ru,
        en: _i18n.name.en,
        zh: _i18n.name.zh,
      },
      brief: {
        ru: _i18n.brief.ru,
        en: _i18n.brief.en,
        zh: _i18n.brief.zh,
      },
    }
    this.state = { brief, name, i18n, photoUrl }
    this.onSubmit = this.onSubmit.bind(this)
  }
  setI18n (field, language, value) {
    const i18n = Object.assign({}, this.state.i18n)
    if (!i18n[field]) {
      i18n[field] = {}
    }
    // const i18nField = i18n[field]
    // i18nField[language] = value
    // console.log(i18nField)
    i18n[field][language] = value
    // console.log(i18n[field][language])
    // console.log(value)
    // console.log(i18n)
    this.setState({ i18n })
  }
  onSubmit () {
    this.props.onSave(this.state)
  }
  render () {
    const { onSubmit } = this.props
    return (
      <div>
        <button onClick={ this.onSubmit } className="button">Save</button>
        name<input value={ this.state.name } onChange={(e) => {this.setState({ name: e.target.value })}}/>
        photoUrl<input value={ this.state.photoUrl } onChange={(e) => {this.setState({ photoUrl: e.target.value })}}/>
        {/* <Trumbowyg value={ this.state.brief } onChange={(e) => {this.setState({ brief: e.target.value })}}/> */}

        ru <input value={ this.state.i18n.name.ru } onChange={(e) => {this.setI18n('name', 'ru', e.target.value)}}/>
        en <input value={ this.state.i18n.name.en } onChange={(e) => {this.setI18n('name', 'en', e.target.value)}}/>
        zh <input value={ this.state.i18n.name.zh } onChange={(e) => {this.setI18n('name', 'zh', e.target.value)}}/>

        ru<Trumbowyg value={ this.state.i18n.brief.ru } onChange={(e) => {this.setI18n('brief', 'ru', e.target.value)}}/>
        en<Trumbowyg value={ this.state.i18n.brief.en } onChange={(e) => {this.setI18n('brief', 'en', e.target.value)}}/>
        zh<Trumbowyg value={ this.state.i18n.brief.zh } onChange={(e) => {this.setI18n('brief', 'zh', e.target.value)}}/>
      </div>
    )
  }
}

export default TeacherForm
