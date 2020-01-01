import React, { Component } from 'react';
import NextRouter from 'next/router';

import { i18n, Link, Router } from '../lib/i18n';
import { nextPageFromLang } from '../lib/utils';

class LanguageSelect extends Component {
  async handleChange(event) {
    event.preventDefault();
    const language = event.target.value;
    if (i18n.language !== language) {
      const routerParams = nextPageFromLang(i18n.language, language);
      await i18n.changeLanguage(language);
      NextRouter.push(...routerParams);
    }
  }

  render() {
    return (
      <div>
        <p>Lang select</p>
        <select name="language" onChange={this.handleChange} defaultValue={this.props.lang}>
          {i18n.options.allLanguages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default LanguageSelect;
