#include <string>
#include <vector>

using namespace std;

vector<int> solution(string logs) {
	vector<int> answer = { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 };
	int temp = 0;

	for (int i = 0; i * 20 < logs.length(); i++) {
		temp = 0;

		temp += (logs[i * 20 + 11] - 48) * 10;
		temp += logs[i * 20 + 12] - 48;
		temp += 9;

		if (temp >= 24) temp -= 24;
		else if (temp < 0) temp = 24 - temp;

		answer[temp]++;
	}

	return answer;
}