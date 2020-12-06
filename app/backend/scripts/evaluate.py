import pickle
import argparse

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('fixed-acidity', type=float, help='g / dm^3')
    parser.add_argument('volatile-acidity', type=float, help='g / dm^3')
    parser.add_argument('citric-acid', type=float, help='g / dm^3')
    parser.add_argument('residual-sugar', type=float, help='g / dm^3')
    parser.add_argument('chlorides', type=float, help='g / dm^3')
    parser.add_argument('free-so2', type=float, help='g / dm^3')
    parser.add_argument('total-so2', type=float, help='g / dm^3')
    parser.add_argument('density', type=float, help='g / dm^3')
    parser.add_argument('ph', type=float)
    parser.add_argument('sulphates', type=float, help='g / dm^3')
    parser.add_argument('alc', type=float, help='g / dm^3')
    opt = parser.parse_args()

    predict = [[getattr(opt, arg) for arg in vars(opt)]]
    with open('/backend/scripts/best.pkl', 'rb') as best:
        model = pickle.load(best)
        print(model.predict(predict)[0])
