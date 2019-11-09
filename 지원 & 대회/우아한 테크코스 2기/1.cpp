#include <string>
#include <vector>

using namespace std;

int solution(vector<int> restaurant, vector<vector<int>> riders, int k) {
	int answer = 0;
	int x;
	int y;

	for (int i = 0; i < sizeof(riders) / sizeof(riders[0][0]); i++) {
		x = restaurant[0] - riders[i][0];
		y = restaurant[1] - riders[i][1];
		if ((x * x) + (y * y) <= k * k) answer++;
	}
	return answer;
}