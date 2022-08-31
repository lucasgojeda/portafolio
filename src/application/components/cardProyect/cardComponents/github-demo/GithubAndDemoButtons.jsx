import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

import './GithubAndDemoButtons.scss';


export const GithubAndDemoButtons = ({ github, demo }) => {
  return (
    <div className="github-demo">

      {
        (github)
        &&
        // <a href={github}>
        <button className="custom-btn btn-3"><span><GitHubIcon /> Github</span></button>
        // </a>
      }

      {
        (demo)
        &&
        // <a href={demo}>
        <button className="custom-btn btn-3"><span><TerminalIcon /> Demo</span></button>
        // </a>
      }

    </div>
  )
}
