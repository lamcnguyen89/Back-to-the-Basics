import React from 'react';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

function MapLegend({legendData}) {

    return (

        <div className="legendContainer">
            {legendData}
        </div>

    );

}

export default MapLegend;