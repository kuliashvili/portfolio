import { Metadata } from 'next';
import AboutPage from './About';

export const metadata = {
  title: "About me",
  description: "Info about me as frontend developer",
};

export default function Page() {
  return <AboutPage />;
}