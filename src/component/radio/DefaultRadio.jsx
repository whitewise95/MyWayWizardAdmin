'use client';

import React from 'react';
import { Flex, Radio } from 'antd';

const defaultOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];

function DefaultRadio({options = defaultOptions}) {
    return (
        <Flex vertical gap="middle">
            <Radio.Group block options={options} defaultValue="Apple" />
            <Radio.Group
                block
                options={options}
                defaultValue="Apple"
                optionType="button"
                buttonStyle="solid"
            />
            <Radio.Group block options={options} defaultValue="Pear" optionType="button" />
        </Flex>
    );
}

export default DefaultRadio;