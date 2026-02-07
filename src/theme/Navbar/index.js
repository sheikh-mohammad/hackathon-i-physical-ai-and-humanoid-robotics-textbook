import React from 'react';
import Navbar from '../../components/Navbar';

/**
 * Navbar Theme Override
 * Replaces Docusaurus default navbar with custom Navbar component
 * This applies to all pages including docs
 */
export default function NavbarWrapper(props) {
  return <Navbar />;
}
