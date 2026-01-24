import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Introduction to Physical AI',
    // SVG placeholder - in a real implementation, you'd use actual SVG content
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn the fundamentals of Physical AI and how it differs from traditional digital AI systems.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    // SVG placeholder
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore the landscape of humanoid robotics, from current state-of-the-art to future trends.
      </>
    ),
  },
  {
    title: 'Complete Curriculum',
    // SVG placeholder
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Follow our comprehensive curriculum covering everything from ROS2 to AI brain systems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}