#include <iostream>
#include <algorithm>

using namespace std;

int main() {
	int count;
	int num[1001];

	cin >> count;

	for (int i = 0; i < count; i++) {
		cin >> num[i];
	}

	for (int a = 0; a < count; a++) {
		for (int j = 0; j < count; j++) {
			if (num[a] < num[j]) swap(num[a], num[j]);
		}
	}

	for (int c = 0; c < count; c++) {
		cout << num[c] << "\n";
	}
}