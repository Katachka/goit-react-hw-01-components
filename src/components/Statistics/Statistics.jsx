import PropTypes from 'prop-types';

// function randomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

export default function Statistics({title, stats}) {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class="item" key={id}>
                            <span class="label">{label}</span>
                            <span class="percentage">{percentage} %</span>
                        </li>
                    );
                })}
            </ul>
            
        </section>
    ); 
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};