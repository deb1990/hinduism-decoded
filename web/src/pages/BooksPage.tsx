import { useI18n } from '../i18n';
import Chapter from '../components/Chapter';
import PageLinks from '../components/PageLinks';
import ScripturesView from '../components/ScripturesView';

export default function BooksPage() {
  const { t } = useI18n();
  return (
    <>
      <Chapter
        id="books" art="rays" accent="#7aa8ff" deep="#050b1a"
        kicker={t('books.kicker')} title={t('books.title')}
        lede={t('books.lede')}
      >
        <ScripturesView />
      </Chapter>
      <PageLinks current="books" />
    </>
  );
}
