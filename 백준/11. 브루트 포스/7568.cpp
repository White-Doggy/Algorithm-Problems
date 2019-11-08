#include <iostream>

using namespace std;

int main() {
	int N;
	int info[50][2];
	int check[50];
	int count = 1;

	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> info[i][0] >> info[i][1];
	}
	
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {			
			if (info[i][0] < info[j][0] && info[i][1] < info[j][1]) count++;
		}
		check[i] = count;
		count = 1;
	}

	for (int i = 0; i < N; i++) {
		cout << check[i] << " ";
	}
}