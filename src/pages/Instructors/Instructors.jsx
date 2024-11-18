import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import ShowInstructors from './All/ShowInstructors.jsx';

const Instructors = () => {
    useTitle('Instructors | Yoga Master - Unleashed Your Inner Self');
    return (
        <section>
            <ShowInstructors />
        </section>
    );
};

export default Instructors;