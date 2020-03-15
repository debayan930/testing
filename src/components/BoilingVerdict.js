import React from 'react';

const BoilingVerdict = ({ celsius }) => {
	return(
		celsius >= 100?<p>Water is boiling hot!!! Watch out!!!</p>:<p>Water is yet to boil. Chillax.</p>
	);
};

export default BoilingVerdict;