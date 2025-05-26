
interface AlbumHeaderProps {
  albumName: string;
  nftCount: number;
}

const AlbumHeader = ({ albumName, nftCount }: AlbumHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        📁 {albumName}
      </h3>
      <p className="text-gray-400 text-sm">
        {nftCount} NFT{nftCount !== 1 ? 's' : ''} found
      </p>
    </div>
  );
};

export default AlbumHeader;
