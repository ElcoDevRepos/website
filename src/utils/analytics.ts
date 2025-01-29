import ReactGA from 'react-ga4';

export const initGA = () => {
  //ReactGA.initialize('G-NZY90G4L7Y');
  ReactGA.initialize('G-HMTR3GHTDW');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
