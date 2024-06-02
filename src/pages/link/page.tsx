'use client';

import { NextPage } from 'next';
import Button from '@/components/button';
import Link from 'next/link';
import Router from 'next/router';

export default (() => {
    function toJump() {
        Router.push('/');
    }
    return (
        <>
            <h1>Link</h1>
            <Button text={'navigator'} onClick={toJump}></Button>
            <Link href="/">Home</Link>
        </>
    );
}) as NextPage;
