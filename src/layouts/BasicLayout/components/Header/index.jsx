import React from 'react';
// import Nav from '@alifd/next';
import Layout from '@icedesign/layout';
// import { Link } from 'react-router-dom';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Logo from '../Logo';

import styles from './index.module.scss';

const Content = () => (
  <GitHubForkRibbon href="//github.com/kingzhuky/meripseqpipe/"
                    target="_blank"
                    position="right"
                    color='black'>
    Fork me on GitHub
  </GitHubForkRibbon>
);

export default function Header(props) {
  const { className, style } = props;

  return (
    <Layout.Header
      theme="dark"
      className={`${styles.iceDesignLayoutHeader} ${className}`}
      style={{ ...style }}
    >
      <Logo />

      <Content />

    </Layout.Header>
  );
}
