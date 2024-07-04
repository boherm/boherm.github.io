import { toString } from 'mdast-util-to-string';
import { readingTime } from 'reading-time-estimator';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    data.astro.frontmatter.minutesRead = readingTime(textOnPage, 200, 'fr').text;
  };
}
