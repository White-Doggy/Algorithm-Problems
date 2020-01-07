#include <iostream>
#include <algorithm>

using namespace std;
int num[1000001];

int main() {
	int count;	
	
	cin >> count;

	for (int i = 0; i < count; i++) {
		cin >> num[i];
	}
	
	// sort!
	sort(num, num + count);

	for (int i = 0; i < count; i++) {
		cout << num[i] << "\n";
	}
}