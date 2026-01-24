import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We couldn't find the page you were looking for.</p>
            <p>
              <Link to="/" className="button button--primary button--lg">
                Back to Homepage
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;