#include <iostream>

using namespace std;

int main() {
	int N, M;
	int card[100];
	
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		cin >> card[i];
	}
	
	int first, second, third;
	int temp; 
	int calc = 10000000;
	int sum;

	for (int a = 0; a < N; a++ ) {
		first = card[a];

		for (int b = 0; b < N; b++) {
			if (a == b) continue;
			second = card[b];

			for (int c = 0; c < N; c++) {
				if (a == c || b == c) continue;
				third = card[c];
				temp = first + second + third;
				if (temp > M) continue;			
				if (M-temp < calc) { 
					calc = M-temp; 
					sum = temp;
				}			
			}
		}
	}	
	cout << sum;
}