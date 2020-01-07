#include <stdio.h>

using namespace std;

int counting[10001];

int main() {
	int input;
	int temp;

	scanf("%d", &input);

	for (int i = 0; i < input; i++) {
		scanf("%d", &temp);
		counting[temp]++;
	}
	
	for (int i = 0; i < 10001; i++) {

		while (counting[i]--) printf("%d\n", i);
	}		
}