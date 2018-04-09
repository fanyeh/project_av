import React from 'react';
import classNames from 'classnames';

const styles = ['bg-dark-red', 'pv3-l', 'pv2', 'ph4-ns', 'ph3', 'ml3-l'];

const AboutDescription = () => {
  return (
    <div className={classNames(styles)}>
      <p className="white f4-ns f5 lh-copy">
        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
        est notare quam littera gothica, quam nunc putamus parum claram
      </p>
      <p className="white f4-ns f5 lh-copy">
        Claritas est etiam processus dynamicus, qui sequitur mutationem consueum formas humanitatis
        per seacula quarta deciEodem modo tythepi, qui nunc, fiant sollemnes in futurum.
      </p>
    </div>
  );
};

export default AboutDescription;
