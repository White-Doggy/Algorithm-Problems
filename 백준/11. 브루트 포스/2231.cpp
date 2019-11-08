#include <iostream>

using namespace std;

int main() {
	int N, temp;
	int sum = 0;
	int ans = 0;
	cin >> N;
	
	for (int i = 1; i < N; i++) {
		temp = i;
		while (temp != 0) {
			sum += temp % 10;
			temp = temp / 10;
		}
		sum += i;
		if (N == sum ) {
			ans = i;		
			break;
		}
		sum = 0;
	}

	cout << ans;

}