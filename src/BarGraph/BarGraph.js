import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from '../DataGrid/Utils/Validate';

ChartJS.register(...registerables);

const BarGraph = React.forwardRef((props, ref) => {

    const labels = props.labels

    const barDataObject = {
        type: 'bar',
        backgroundColor: props.barData && props.barData.backgroundColor,
        borderColor: props.barData && props.barData.borderColor,
        borderWidth: props.barData && props.barData.borderWidth ? props.barData.borderWidth : 1,
        data: props.barData && props.barData.data,
        barThickness: props.isMobile ? 20 : 50,
        borderRadius: props.isMobile ? 5 : 10,
        borderSkipped: 'bottom',
        order: 5
    }

    const upperAbnormalValue = {
        type: 'line',
        label: "Abnormal",
        backgroundColor: "#E57433",
        borderColor: "#E57433",
        borderWidth: 2,
        data: props.upperAbnormalValue && props.upperAbnormalValue.data,
        order: 1,
        pointStyle: 'circle',
        pointRadius: 1,
        pointHoverRadius: 5
    }


    const upperCriticalValue = {
        type: 'line',
        label: "Critical",
        backgroundColor: "#CD2E20",
        borderColor: "#CD2E20",
        borderWidth: 2,
        data: props.upperCriticalValue && props.upperCriticalValue.data,
        order: 2,
        pointStyle: 'circle',
        pointRadius: 1,
        pointHoverRadius: 5

    }

    const lowerAbnormalValue = {
        type: 'line',
        label: "Lower Abnormal",
        backgroundColor: "#E57433",
        borderColor: "#E57433",
        borderWidth: 2,
        data: props.lowerAbnormalValue && props.lowerAbnormalValue.data,
        order: 3,
        pointStyle: 'circle',
        pointRadius: 1,
        pointHoverRadius: 5
    }


    const lowerCriticalValue = {
        type: 'line',
        label: "Lower Critical",
        backgroundColor: "#CD2E20",
        borderColor: "#CD2E20",
        borderWidth: 2,
        data: props.lowerCriticalValue && props.lowerCriticalValue.data,
        order: 4,
        pointStyle: 'circle',
        pointRadius: 1,
        pointHoverRadius: 5
    }

    const datasets = [];
    if (!isNullOrUndefined(props.barData)) {
        datasets.push(barDataObject);
    }
    if (!isNullOrUndefined(props.upperCriticalValue)) {
        datasets.push(upperCriticalValue);
    }
    if (!isNullOrUndefined(props.upperAbnormalValue)) {
        datasets.push(upperAbnormalValue);
    }
    if (!isNullOrUndefined(props.lowerAbnormalValue)) {
        datasets.push(lowerAbnormalValue);
    }
    if (!isNullOrUndefined(props.lowerCriticalValue)) {
        datasets.push(lowerCriticalValue);
    }


    const dataObj = {
        data: {
            labels,
            datasets
        },
    }

    const options = {
        responsive: true,
        scales: {
            x: 
            {
                grid: {
                  display: props.fromcrm?false:true
                }
            },
            y:
            {
                grid: {
                    display: props.fromcrm?false:true
                  },
                min: props.minValue ? props.minValue : 0,
                max: props.maxValue,
                type: 'logarithmic',
                ticks: {
                    stepSize: props.interval,
                    maxTicksLimit: props.maxTicksLimit ? props.maxTicksLimit : 10
                }
            },
        },
        layout: {
            padding: props.padding
        },
        plugins: {
            colors: {
                forceOverride: false
            },
            legend: {
                display: props.fromcrm?true:false,
                position : 'right',
                onClick: function(event, legendItem) {},
                labels: {
                   font:{ 
                    size: 12
                   },
                   boxWidth:10,
                   generateLabels: function() {
                      var labels = props.barData.labels ? props.barData.labels : props.labels;
                      var legend = labels.map(function(label, index) {
                         return {
                            datasetIndex: 0,
                            fillStyle: barDataObject.backgroundColor && barDataObject.backgroundColor[index],
                            text: label
                         }
                      });
                      return legend;
                   }
                }
            }
        },
    };
    return (
        <div className='canvas-container' >
            <Chart ref={ref} type='bar' data={dataObj.data} options={options} height={props.height} width={props.width} />
        </div>
    )
})

BarGraph.propsType = {
    labels: PropTypes.array.isRequired,
    barData: PropTypes.object.isRequired,
    abnormalValue: PropTypes.object.isRequired,
    criticalValue: PropTypes.object.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    interval: PropTypes.number,
    title: PropTypes.string,
    forceOverrideColors: PropTypes.bool,

}
export default BarGraph