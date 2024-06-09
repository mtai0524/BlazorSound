namespace BlazorSound.Services
{
    public class MusicService
    {
        public event Action OnPlaybackChanged;

        private string _currentTrack;
        public string CurrentTrack
        {
            get { return _currentTrack; }
            set
            {
                if (_currentTrack != value)
                {
                    _currentTrack = value;
                    OnPlaybackChanged?.Invoke();
                }
            }
        }

        public void PlayNext()
        {
            // Logic để phát bản nhạc tiếp theo
            // Ví dụ: Cập nhật CurrentTrack thành bài hát tiếp theo
            // Bạn cần triển khai logic phù hợp để lấy bài hát tiếp theo dựa trên danh sách mp3Files
        }

        public void Stop()
        {
            // Logic để dừng phát nhạc
            // Có thể đặt CurrentTrack về null hoặc một giá trị đặc biệt để chỉ ra rằng không có bài hát đang phát
            CurrentTrack = null;
        }
    }
}
