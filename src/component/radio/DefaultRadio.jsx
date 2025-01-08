'use client';

import React from 'react';
import { Flex, Radio } from 'antd';

const defaultOptions = [
    { label: '점검중 공지', value: '1' },
    { label: '로비 공지', value: '2' },
    { label: '긴급메세지', value: '3' },
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