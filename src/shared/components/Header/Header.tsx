"use client";

import React from 'react';

import { Button, Container, Link } from './styles';

const Header = () => {
  return <Container>
    <Link href={'/map'}>
      <Button>Map</Button>
    </Link>
    <Link href={'/community-nades'}>
      <Button>Community Nades</Button>
    </Link>
    <Link href={'/my-nades'}>
      <Button>My Nades</Button>
    </Link>
  </Container>
};

export default Header;
