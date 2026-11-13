import Chapter from '../components/Chapter';
import PageLinks from '../components/PageLinks';
import ScripturesView from '../components/ScripturesView';

export default function BooksPage() {
  return (
    <>
      <Chapter
        id="books" art="rays" accent="#7aa8ff" deep="#050b1a"
        kicker="The books" title="Every text, in order"
        lede="The main scriptures on one scale, with what each one gave and what it says about the gods."
      >
        <ScripturesView />
      </Chapter>
      <PageLinks current="books" />
    </>
  );
}
