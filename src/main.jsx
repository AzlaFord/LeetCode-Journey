import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import HomePage from './HomePage/HomePage.jsx';
import DiscussChat from './Discuss/DiscussChat.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import ProblemNavigator from './ProblemNavigation/ProblemNavigation.jsx';

const probleme = {
  'Two Sum': {
    name: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    solved: `function TwoSum(arr,target){
      let Hmap = {}
      for(let i=0; i<arr.length; i++){
          let diferenta = target -arr[i]
          if(diferenta in Hmap){
              return [Hmap[diferenta],i]
          }
          Hmap[arr[i]]= i

      }
      return null

    }`,
  },
  'Add Two Numbers': {
    name: 'Add Two Numbers',
    difficulty: 'Medium',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit.',
    solved:`function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
}
`
  },
  'Longest Substring Without Repeating Characters': {
    name: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    solved:`function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Dacă caracterul există deja în set, mutăm "left" până îl scoatem
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
`
  },
}

const router = createBrowserRouter([
  {
    path: '/',  // baza site-ului: /LeetCode-Journey/
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // homepage la /LeetCode-Journey/
        element: <HomePage />,
      },
      {
        path: 'discuss', // /LeetCode-Journey/discuss
        element: <DiscussChat />,
      },
      ...Object.entries(probleme).map(([key, problem]) => ({
        path: `problema/${encodeURIComponent(key)}`, // ex: /LeetCode-Journey/problema/Two%20Sum
        element: (
          <ProblemNavigator
            name={problem.name}
            difficulty={problem.difficulty}
            description={problem.description}
            solved={problem.solved}
          />
        ),
      })),
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
