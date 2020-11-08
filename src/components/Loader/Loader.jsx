import React, { Component } from 'react'
import cx from 'classnames'

import styles from './Loader.module.scss'

class Loader extends Component {
  render() {
    return (
      <div
        className={cx('loader-container', styles.loaderContainer)}
      >
        <span className={cx('loader-animation', styles.loaderAnimation)} />
      </div>
    )
  }
}
export default Loader;
