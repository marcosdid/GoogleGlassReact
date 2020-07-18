import React from 'react'

import {MyFooter} from './styles'

export default function Footer() {
  return (
    <MyFooter>
      <footer>
        <p>Copyright 2013 - by Marcos Alves</p>
        <p>
          <a 
            href="https://www.linkedin.com/in/marcos-alves-4255381a0/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> | <a 
            href="https://github.com/marcosdid" 
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </MyFooter>
  )
}