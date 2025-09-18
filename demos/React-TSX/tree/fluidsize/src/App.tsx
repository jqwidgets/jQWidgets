import * as React from 'react';
import { useRef, useEffect } from 'react';
import './App.css';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

function App() {
  const myTree = useRef<JqxTree>(null);
  const home = useRef<HTMLLIElement>(null);
  const solutions = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (myTree.current && solutions.current) {
      myTree.current.expandItem(solutions.current);
    }
  }, []);

  return (
    <JqxTree theme="material-purple" ref={myTree} width="50%" height="50%">
      <ul>
        <li ref={home}>Home</li>
        <li ref={solutions}>
          Solutions
          <ul>
            <li>Education</li>
            <li>Financial services</li>
            <li>Government</li>
            <li>Manufacturing</li>
            <li>
              Solutions
              <ul>
                <li>Consumer photo and video</li>
                <li>Mobile</li>
                <li>Rich Internet applications</li>
                <li>Technical communication</li>
                <li>Training and eLearning</li>
                <li>Web conferencing</li>
              </ul>
            </li>
            <li>All industries and solutions</li>
          </ul>
        </li>
        <li>
          Products
          <ul>
            <li>PC products</li>
            <li>Mobile products</li>
            <li>All products</li>
          </ul>
        </li>
        <li>
          Support
          <ul>
            <li>Support home</li>
            <li>Customer Service</li>
            <li>Knowledge base</li>
            <li>Books</li>
            <li>Training and certification</li>
            <li>Support programs</li>
            <li>Forums</li>
            <li>Documentation</li>
            <li>Updates</li>
          </ul>
        </li>
        <li>
          Communities
          <ul>
            <li>Designers</li>
            <li>Developers</li>
            <li>Educators and students</li>
            <li>Partners</li>
            <li>
              By resource
              <ul>
                <li>Labs</li>
                <li>TV</li>
                <li>Forums</li>
                <li>Exchange</li>
                <li>Blogs</li>
                <li>Experience Design</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Company
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Corporate Affairs</li>
            <li>Careers</li>
            <li>Showcase</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li>Become an affiliate</li>
          </ul>
        </li>
      </ul>
    </JqxTree>
  );
}

export default App;