import React from 'react'
import Trumbowyg from '/imports/modules/trumbowyg'
import PropTypes from 'prop-types'


class PageForm extends React.Component {
  static propTypes = {
    page: PropTypes.shape({
      body: PropTypes.string,
      alias: PropTypes.string,
      i18n: PropTypes.object,
    })
  }
  constructor(props) {
    super(props)
    const { body, alias } = props.page
    const _i18n = props.page.i18n || { title: {}, body: {} }
    const i18n = {
      title: {
        ru: _i18n.title.ru,
        en: _i18n.title.en,
        zh: _i18n.title.zh,
      },
      body: {
        ru: _i18n.body.ru,
        en: _i18n.body.en,
        zh: _i18n.body.zh,
      },
    }
    this.state = { body, alias, i18n }
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
        <input value={ this.state.alias } onChange={(e) => {this.setState({ alias: e.target.value })}}/>
        {/* <Trumbowyg value={ this.state.body } onChange={(e) => {this.setState({ body: e.target.value })}}/> */}

        ru <input value={ this.state.i18n.title.ru } onChange={(e) => {this.setI18n('title', 'ru', e.target.value)}}/>
        en <input value={ this.state.i18n.title.en } onChange={(e) => {this.setI18n('title', 'en', e.target.value)}}/>
        zh <input value={ this.state.i18n.title.zh } onChange={(e) => {this.setI18n('title', 'zh', e.target.value)}}/>

        ru<Trumbowyg value={ this.state.i18n.body.ru } onChange={(e) => {this.setI18n('body', 'ru', e.target.value)}}/>
        en<Trumbowyg value={ this.state.i18n.body.en } onChange={(e) => {this.setI18n('body', 'en', e.target.value)}}/>
        zh<Trumbowyg value={ this.state.i18n.body.zh } onChange={(e) => {this.setI18n('body', 'zh', e.target.value)}}/>
      </div>
    )
  }
}

export default PageForm
