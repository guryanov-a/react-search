import { connect } from 'react-redux';
import PreviewsList from './PreviewsList';

const mapStateToProps = ({ searchResults, totalSearchResults }) => ({
  previews: searchResults,
  totalPreviews: totalSearchResults,
});

const SearchResultList = connect(
  mapStateToProps,
)(PreviewsList);

export default SearchResultList;