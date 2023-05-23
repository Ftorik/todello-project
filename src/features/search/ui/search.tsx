import React, { useState } from 'react';

import { ActiveSearch } from './active-search';
import { InactiveSearch } from './inactive-search';

export const Search = () => {
    const [visible, setVisible] = useState(false);

    return visible ? (
        <ActiveSearch setVisible={setVisible} visible={visible} />
    ) : (
        <InactiveSearch setVisible={setVisible} />
    );
};
