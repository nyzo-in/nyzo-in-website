import React, { Component } from 'react';
import NextRouter from 'next/router';

import { i18n, Link, Router } from '../i18n';

class LanguageSelect extends Component {
  handleChange(event) {
    event.preventDefault();
    if (i18n.language !== event.target.value) {
      i18n.changeLanguage(event.target.value);
      // work out which page to change to
      // go to the homepage for now
      // this works for home page
      // NextRouter.push('/', '/' + event.target.value, { shallow: true });
      // testing -->
      // looks like this works when on the intro page
      // todo , make dynamic
      NextRouter.push('/docs/intro', '/' + event.target.value + '/docs/intro', { shallow: true });
    }
  }

  render() {
    return (
      <>
        <p>Lang select</p>
        <select name="language" onChange={this.handleChange} defaultValue={this.props.lang}>
          {i18n.options.allLanguages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default LanguageSelect;
