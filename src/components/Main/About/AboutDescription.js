import React from 'react';
import classNames from 'classnames';

const styles = ['bg-dark-red', 'w-60', 'pv4', 'ph5', 'ml4'];

const AboutDescription = () => {
  return (
    <div className={classNames(styles)}>
      <p className="white f4 lh-copy">
        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
        est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
        formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc,
        fiant sollemnes in futurum.
      </p>
      <p className="white f4 lh-copy">
        Claritas est etiam processus dynamicus, qui sequitur mutationem consueum formas humanitatis
        per seacula quarta deciEodem modo tythepi, qui nunc, fiant sollemnes in futurum.
      </p>
    </div>
  );
};

export default AboutDescription;
