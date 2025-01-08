'use client'

import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';

/**
 * variant = solid / outlined / dashed / filled / text / link
 * 검정색 - default
 * 파란색 - primary
 * 빨간색 - danger
 * */
function DefaultButton({color = "primary", variant = "solid", children}) {
    const { xxl } = useResponsive();

    return (
        <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
            <Flex vertical gap="middle">
                <Flex gap="middle" wrap>
                    <Button color={color} variant={variant}>
                        {children}
                    </Button>
                </Flex>
            </Flex>
        </ConfigProvider>
    );
}

export default DefaultButton;