import React from 'react';

import './ExternalLink.css';

export type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ExternalLink: React.FunctionComponent<ExternalLinkProps> = props => {
  const { children, ...rest } = props;

  return (
    <a rel="noopener noreferrer" target="_blank" {...rest}>{children}</a>
  );
};

export default ExternalLink;

export {}