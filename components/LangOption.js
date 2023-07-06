import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LangOption() {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <header className='d-flex flex-row-reverse'>
    <select className="form-select form-select-sm mt-3 me-3 position-absolute top-0 end-0 " onChange={(e) => setLanguage(e.target.value)}>
        <option value="fr">Français</option>
        <option value="en">English</option> 
    </select>
    </header>
  );
}

export default LangOption